---
prev: false
next: false
editLink: false
---

# Update Log

::: tip Note
This is the update log of the `QmBlurView Components` Library.

GitHub: [QmDeve/QmBlurView](https://github.com/QmDeve/QmBlurView)
:::

### v2.0.0 <Badge type="tip" text="Upcoming" /> <Badge type="tip" text="Planned" /> <Badge type="tip" text="Next Version" />
- Improved performance and stability
- Use Kotlin Refactor
- Add new blur components and features
- etc...

---

### 2026-07-22 <Badge type="tip" text="v1.3.0" /> <Badge type="tip" text="Latest Version" />
- Performance optimization: Significantly improved the rendering smoothness of blur and reduced

---

### 2026-06-07 <Badge type="tip" text="v1.2.0" />
- Add `ProgressiveBlurViewGroup` Component
- Minor refactoring in `BlurViewGroup` to avoid redrawing

---

### 2026-05-20 <Badge type="tip" text="v1.1.5" />
- Added New XML attribute topLeftCornerRadius:
  - `topRightCornerRadius`
  - `bottomLeftCornerRadius`
  - `bottomRightCornerRadius`

- Added New Method:
  - `setTopLeftCornerRadius(float radius)`
  - `setTopRightCornerRadius(float radius)`
  - `setBottomLeftCornerRadius(float radius)`
  - `setBottomRightCornerRadius(float radius)`
  - `getTopLeftCornerRadius()`
  - `getTopRightCornerRadius()`
  - `getBottomLeftCornerRadius()`
  - `getBottomRightCornerRadius()`

---

### 2026-02-07 <Badge type="tip" text="v1.1.4" />
- Fix: prevent NPE in blur view canvas restoration
- Fix: catch IndexOutOfBoundsException in blur rendering

---

### 2026-01-19 <Badge type="tip" text="v1.1.3" />
- Change `Java 17` to `Java 11`
- Change the code to `Java 11` syntax

---

### 2026-01-07 <Badge type="tip" text="v1.1.2" />
- Change the version of `androidx.core:core` to `1.12.0` for better compatibility

---

### 2026-01-02 <Badge type="tip" text="v1.1.1" />
- Fix the problem that `BlurViewGroup` throws an exception on some devices

---

### 2025-12-28 <Badge type="tip" text="v1.1.0" />
- Change the module name of `QmBlurView` to `core`
- Change the module name of `Navigation` to `navigation`
- Change the module name of `Transform` to `transform`
- Change the module name of `Transform` to `transform`
- Change the version of Cmake to `3.22.1`

---

### 2025-12-24 <Badge type="tip" text="v1.0.6" />
- Fix bug

---

### 2025-12-13 <Badge type="tip" text="v1.0.5" />
- Fix: Modified BlurNative.java to use a static, shared ExecutorService
- Fix: Added a `setDownsampleFactor(float)` API and a corresponding XML attribute `app:downsampleFactor`
- Update blur view components to handle overlapping scenarios
- Integrated Glide: New `com.qmdeve.blurview.transform.glide.BlurTransformation`, Realizing Glide BitmapTransform The extension of ation supports BitmapPool to ensure efficient memory management and correct disk cache keys.
- Integrated Picasso: Add `com.qmdeve.blurview.transform.picasso.BlurTransformation` to implement the Transformation interface, Bitmap recycling has been properly handled.
- Configurable blur effect: Both integration methods support the configuration of blur radius and rounded corner radius.
- Fixed the resource leakage problem of BlurNative, and avoided repeated instantiation by changing it to a static shared instance.
- Added an empty check to Glide's BitmapPool.get() call to enhance the robustness of the application.
- Improved error handling and debugging logic.
- Skip thread overhead for single-core devices in Java layer
- Replace VLA with heap allocation in native code to prevent stack overflow
- Remove unnecessary alpha channel clamping in blur calculations
- BaseBlurView now automatically detects SurfaceView and calls setZOrderMediaOverlay(true) to ensure proper Z-ordering for blurring.
- Adds informative logs when a SurfaceView is configured and provides warnings for potential issues (e.g., API level < 24).
- Checks if the SurfaceView's surface is valid before attempting PixelCopy to prevent crashes.
- Enhances error handling for PixelCopy failures, with retries for transient errors like ERROR_SOURCE_NO_DATA.
- Adds detailed logging for PixelCopy successes and failures to aid debugging.
- Performance: Move PixelCopy operations to dedicated handler thread
- Fully rewrote the measurement logic to correctly handle margin and size measurements for subviews
- Support for android:layout_gravity has been added, allowing subviews to be precisely positioned within a parent container
- The previous version's sub-view layout positioning function was limited, which has been resolved
- The issue of not supporting complex layout requirements has been resolved
- The measurement logic is not perfect, which has been resolved
- Enhancement: Check the LayoutParams type of the subview when measuring
- New: If it is not LayoutParams type, it will automatically convert and set back to sub-views.
- Improvement: Make sure that all sub-views use the correct LayoutParams type
- Improvement: Re-measure only when the available space is different from the current measurement size
- Optimization: avoid unnecessary re-measurement and improve performance
- Enhancement: More accurate handling of FILL_HORIZONTAL and FILL_VERTICAL Gravity
- Improvement: Corrected the calculation logic of the sub-view position
- Optimization: Safer boundary inspection
- Optimization: Ensure that the sub-view does not exceed the boundary of the parent container

---

### 2025-11-24 <Badge type="tip" text="v1.0.4.7" />
- New addition of synchronized blur processing
- Reduce visual latency caused by asynchronous processing
- Enhance automatic processing of hardware bitmaps

---

### 2025-11-23 <Badge type="tip" text="v1.0.4.6" />
- Ensure hardware bitmaps are converted to software bitmaps for blur processing.
- Add methods to check and disable hardware bitmaps in view hierarchy.
- Update blur logic and error handling for hardware bitmap scenarios.
- Introduce logging for debugging bitmap processing issues.
- Implement SurfaceView blur rendering using PixelCopy API.
- Extend BaseBlurView to handle SurfaceView snapshots and integrate into blur logic.

---

### 2025-11-18 <Badge type="tip" text="v1.0.4.5" />
- Optimized rendering performance
- Optimize code logic
- Add `BlurViewGroup` Component
- Add `BottomNavigationView` Component
- Add `BaseBlurView` class
- Add `BaseBlurViewGroup` class
- delete `BlurUtils` class
- Fix: Ensure hardware bitmaps are converted to software bitmaps for blur processing
- Add methods to check and disable hardware bitmaps in view hierarchy
- Update blur logic and error handling for hardware bitmap scenarios
- Introduce logging for debugging bitmap processing issues
- Add handling for hardware bitmap compatibility in BaseBlurView

---

### 2025-11-07 <Badge type="tip" text="v1.0.4.4" />
**The main changes made to the `BlurSwitchButtonView` component in this update are as follows:**
  - Add `app:useSolidColorMode` attribute to enable solid color mode.
  - Add `app:solidOnColor` attribute
  - Add `app:solidOffColor` attribute
  - Add `BlurSwitchButtonView.setUseSolidColorMode()` method
  - Add `BlurSwitchButtonView.isUseSolidColorMode()` method
  - Add `BlurSwitchButtonView.setSolidColors()` method
  - Add `BlurSwitchButtonView.getSolidOnColor()` method
  - Add `BlurSwitchButtonView.getSolidOffColor()` method
  
---

### 2025-10-31 <Badge type="tip" text="v1.0.4.3" />
- Fix bug

---

### 2025-10-26 <Badge type="tip" text="v1.0.4.2" />
- Optimize the click animation of the `BlurButtonView` Component

---

### 2025-10-25 <Badge type="tip" text="v1.0.4.1" />
- Add `BlurFloatingButtonView` Component

---

### 2025-10-25 <Badge type="tip" text="v1.0.4" />
- Add `BlurSwitchButtonView` Component

---

### 2025-10-24 <Badge type="tip" text="v1.0.3.2" />
- Fix the bug in the `BlurTitleBarView` Component

---

### 2025-10-24 <Badge type="tip" text="v1.0.3.1" />
- Add `BlurFrameLayout` Component

---

### 2025-10-23 <Badge type="tip" text="v1.0.3" />
- Add `ProgressiveBlurView` Component
- Add `BlurTitlebarView` Component
- Change the Component `QmBlurView` to `BlurView`
- Change `QmBlurButtonView` to `BlurButtonView`
- Change the `qmBlurRadius` attribute of the BlurView Component to `blurRadius`
- Change the `qmOverlayColor` attribute of the BlurView Component to `overlayColor`
- Change the `qmCornerRadius` attribute of the BlurView Component to `cornerRadius`

---

### 2025-10-22 <Badge type="tip" text="v1.0.2" />
- Add `QmBlurButtonView` Component

---

### 2025-10-22 <Badge type="tip" text="v1.0.1" />
- Change `minSdk 24` to `minSdk 21`
- `Java 11` changed to `Java 8`
- Added `setCornerRadius` method
- Add `BlurUtils` class

---

### 2025-10-21 <Badge type="tip" text="v1.0.0" />
- Initial release of QmBlurView Components library.