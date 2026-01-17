# tristate-checkbox
Javascript compatible Web Component for three-state checkbox supporting the indeterminate state.
# Installation
Add tri-state-checkbox Web Component into your project with <script> tag in the `<head>` scope:
~~~
<script src="tricbwc.js" type="text/javascript"></script>
~~~
# Usage
Put tri-state-checkbox control likewise ordinary `<input type="checkbox">` control:
~~~
<tri-state-checkbox id="id" name="name"></tri-state-checkbox>
~~~
# Attributes
|Name	   |Default	|Description |
|--------|---------|----------------------------------|
|id |    |Standard access |
|name|		  |Name for form|
|value |0  |1 - On; 0 - Off; -1 - Undefined  |
|label|Off |Off - no label; On - 1 - "on"; 0 - "off"; -1 - "all"|
|class||Class for stanard access and manage by top control|
|disabled||Disables control off user access|
|top||Point top control to the group of linked controls|
|mode|tri|Three ("tri") or two ("bi") states mode|
