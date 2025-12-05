import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';


export class InfrastructureStack extends cdk.Stack {
  public readonly distribution: cloudfront.Distribution;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. Create a private S3 bucket to store the website files
    const blogBucket = new s3.Bucket(this, 'BlogBucketFwdays', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicPolicy: false,
      })
    });

    // 2. Create a CloudFront Distribution
    this.distribution = new cloudfront.Distribution(this, 'BlogBucketFwdaysDistribution', {
        defaultRootObject: 'index.html',
        defaultBehavior: {
            // Link the Distribution to the S3 Bucket
            origin: new origins.S3Origin(blogBucket, {
              originPath: '/'
            }), 
            viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
    });

    // 3. Deploy your local static files to the S3 bucket
    new BucketDeployment(this, 'BlogBucketFwdaysDeployment', {
        sources: [Source.asset('../front-end/dist')],
        destinationBucket: blogBucket,
        distribution: this.distribution,
        distributionPaths: ['/*'],
    });
  }
}
