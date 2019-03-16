---
title: Inflating layouts with the ContentView annotation
tags:
- kotlin
- androidx
- android
- annotation
categories:
- programming
author: edric_chan
---

In this post, I'll be covering how to simplify inflating layouts in your fragments/activities with the [`ContentView`](https://developer.android.com/reference/androidx/annotation/ContentView) annotation.

<!-- End of excerpt -->

_Note: The `ContentView` annotation was introduced in version `1.1.0-alpha01` of the `androidx.annotation:annotation` library. See the [release notes](https://developer.android.com/jetpack/androidx/releases/annotation#1.1.0-alpha01) for more info._

---

This is probably what you use to inflate a layout - override the `onCreateView` to inflate a layout (for fragments) and return the instance, or to call `setContentView` in the `onCreate` method to set the layout.

### Java (Fragment)

```java
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
// ...

public class HomeFragment extends Fragment {
  // ...
  @Override
  public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
    return inflater.inflate(R.layout.frag_home, container, false);
  }
}
```

### Kotlin (Fragment)

```kotlin
import android.os.Bundle
import android.view.*
import androidx.fragment.app.Fragment
// ...

class HomeFragment : Fragment() {
  override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
    return inflater.inflate(R.layout.frag_home, container, false)
  }
  // ...
}
```

### Java (Activity)

```java
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
  }
}
```

### Kotlin (Activity)

```kotlin
import android.os.Bundle
import androidx.appcompat.AppCompatActivity;

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
  }
}
```

This can now be simplified with the `ContentView` annotation. Just specify the layout resource ID as the parameter of the annotation and use it on the class definition.

### Java (Fragment)

```java
import androidx.annotation.ContentView;
import androidx.fragment.app.Fragment;
// ...

@ContentView(R.layout.frag_home)
public class HomeFragment extends Fragment {
  // ...
}
```

### Kotlin (Fragment)

```kotlin
import androidx.annotation.ContentView
import androidx.fragment.app.Fragment
// ...

@ContentView(R.layout.frag_home)
class HomeFragment: Fragment() {
  // ...
}
```

### Java (Activity)

```java
import androidx.annotation.ContentView;
import androidx.appcompat.app.AppCompatActivity;

@ContentView(R.layout.activity_main)
public class MainActivity extends AppCompatActivity {
  // ...
}
```

### Kotlin (Activity)

```kotlin
import androidx.annotation.ContentView;
import androidx.appcompat.app.AppCompatActivity;

@ContentView(R.layout.activity_main)
class MainActivity : AppCompatActivity() {
  // ...
}
```

## Notes

* The ability to use the `ContentView` annotation on a class that extends [`ComponentActivity`](https://developer.android.com/reference/androidx/activity/ComponentActivity) (which [`FragmentActivity`](https://developer.android.com/reference/androidx/fragment/app/FragmentActivity) directly and [`AppCompatActivity`](https://developer.android.com/reference/androidx/appcompat/app/AppCompatActivity) indirectly inherit from) was introduced in `1.0.0-alpha04` of the `androidx.activity:activity` dependency. (See the [release notes](https://developer.android.com/jetpack/androidx/releases/activity#1.0.0-alpha04) for more info)
* The ability to use the `ContentView` annotation on a class that extends [`Fragment`](https://developer.android.com/reference/androidx/fragment/app/Fragment) was introduced in `1.1.0-alpha04` of the `androidx.fragment:fragment` dependency. (See the [release notes](https://developer.android.com/jetpack/androidx/releases/fragment#1.1.0-alpha04) for more info)
