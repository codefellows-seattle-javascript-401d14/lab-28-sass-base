401 JS --  Lab 28 Sass
===

My reset is here!
```javascript
* {
  position: static;
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  font-weight: normal;
  line-height: 1.2em;
  color: $base-color;
  &:focus {
    outline: 0;
  }
}
```
My mixins for padding, centering and for writing code!

```javascript
@mixin headline($size, $color: $base-color) {
  color: $color;
  font-size: $size;
}
@mixin magic-pad {
  box-sizing: border-box;
  padding: $padding;
}
@mixin bubble {
  @include magic-pad;
  border-radius: 0.25em;
  font-family: sans-serif;
}
@mixin push--auto {
   margin: {
     left: auto;
     right: auto;
   }
 }
 @mixin cf {

	&::after {
		content: '';
		display: table;
		clear: both;
	}
}
@mixin code {
  background-color: $darkgrey;
  color: $lightgrey;
}
```
