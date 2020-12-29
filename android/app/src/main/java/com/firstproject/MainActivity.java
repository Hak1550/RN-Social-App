package com.firstproject;

// import co.apptailor.googlesignin.RNGoogleSigninPackage; // <--- import

import com.facebook.react.ReactActivity;

// import com.reactnative.picker.PickerPackage; // import package 

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */

  @Override
  protected String getMainComponentName() {
    return "FirstProject";
    // new RNGoogleSigninPackage(); // <-- this needs to be in the list

  }

}
// @Override
// protected List<FirstProject> getPackages() {
// return

// Arrays < FirstProject > asList(new MainReactPackage(), new
// PickerPackage() // Add package
// );
// }
