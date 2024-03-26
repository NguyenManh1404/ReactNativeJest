#import "AppDelegate.h"
#import <RNGoogleSignin/RNGoogleSignin.h>
#import <AuthenticationServices/AuthenticationServices.h> // <- Add This Import
#import <SafariServices/SafariServices.h> // <- Add This Import
#import <FBSDKCoreKit/FBSDKCoreKit-Swift.h> // <- Add This Import
#import <React/RCTLinkingManager.h> // <- Add This Import

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ReactNativeJest";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  [FBSDKApplicationDelegate.sharedInstance initializeSDK];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (BOOL) application: (UIApplication *)application
            openURL: (NSURL *)url
             options: (NSDictionary<UIApplicationOpenURLOptionsKey, id> *) options
 {

    if ([[FBSDKApplicationDelegate sharedInstance] application:application openURL:url options:options]) {
    return YES;
  }

   [RNGoogleSignin application:application openURL:url options:options];
   if ([self.authorizationFlowManagerDelegate resumeExternalUserAgentFlowWithURL:url]) {
     return YES;
  }
   return [RCTLinkingManager application:application openURL:url options:options];
 }

- (BOOL) application: (UIApplication *) application
 continueUserActivity: (nonnull NSUserActivity *)userActivity
   restorationHandler: (nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
 {
   if ([userActivity.activityType isEqualToString:NSUserActivityTypeBrowsingWeb]) {
     if (self.authorizationFlowManagerDelegate) {
      BOOL resumableAuth = [self.authorizationFlowManagerDelegate resumeExternalUserAgentFlowWithURL:userActivity.webpageURL];
       if (resumableAuth) {
         return YES;
       }
    }
  }
   return [RCTLinkingManager application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
  }


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
