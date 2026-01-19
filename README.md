# tristate-checkbox
Javascript compatible Web Component for three-state checkbox supporting the indeterminate state.
# Installation
Add tristate-checkbox Web Component into your project with <script> tag in the `<head>` scope:
~~~
<script src="tricbwc.js" type="text/javascript"></script>
~~~
# Usage
Put tristate-checkbox control likewise ordinary `<input type="checkbox">` control:
~~~
<tristate-checkbox id="id" name="name"></tristate-checkbox>
~~~
Example:
~~~
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Tristate Checkbox</title>
<style>

</style>
<script src="tricbwc.js" type="text/javascript"></script>

</head>
<body>

<tristate-checkbox
      id="cb1"
      name="cb1"
      label="Veggies"
      top="vcb">
  </tristate-checkbox>
  <br/>

<fieldset style="display:inline-block;">
<legend>Choose your best of three</legend>
  <tristate-checkbox
      id="cb12"
      name="cb12"
      value="-1"
      class="vcb"
      label="Cucumber"
      tip="on"
      tips="green, yellow, any">
  </tristate-checkbox>
<br/>

<tristate-checkbox
      id="cb13"
      name="cb13"
      class="vcb"
      tip="on"
      disabled
      label="Tomato"
      tip="on"
      tips="red, green, any"
      >
  </tristate-checkbox>
<br/>
  <tristate-checkbox
      id="cb14"
      name="cb14"
      class="vcb"
      tip="on"
      label="Onion"
      tip="on"
      tips="white, red, any"
      >
  </tristate-checkbox>
  </fieldset>
  <br/>

  <tristate-checkbox
      id="cb2"
      name="cb2"
      top="fcb"
      label="Fruits">
  </tristate-checkbox>
  <br/>

<fieldset style="display:inline-block;">
<legend>Choose your best of two</legend>
  <tristate-checkbox
      id="cb21"
      name="cb21"
      class="fcb"
      mode="bi"
      value="1"
      disabled
      label="Apple"
      tip="on"
      tips="red, green, any">
  </tristate-checkbox>
<br/>

<tristate-checkbox
      id="cb22"
      name="cb22"
      class="fcb"
      tip="on"
      mode="bi"
      value="1"
      label="Orange"
      tips="green, yellow, any">
  </tristate-checkbox>
  </fieldset>
<p></p>
<tristate-checkbox
      id="cb3"
      name="cb3"
      value="1"
      mode="bi"
      title="Title"
      label="Basket"
      tip="on"
      tips="plastic, wooden, any">
  </tristate-checkbox>
  
  <p></p>

<button  onclick="showvals()">Submit</button>

<script>
  function showvals() { 
  var ret="";
      const tags = document.querySelectorAll('tristate-checkbox');
          tags.forEach(tag => { 
          ret += tag.id + ": " + tag.value + "; ";
          });
alert(ret)
}
</script>
</body>
</html>

~~~
# Attributes
|Name	   |Default	|Description |
|--------|---------|----------------------------------|
|id |    |Standard access |
|name|		  |Name for form|
|value |0  |1 - on; 0 - off; -1 - undefined  |
|label| |Label text|
|tip|off |"on" - show corresponding description of the value|
|tips| |List of corresponding values|
|class||Class for stanard access and manage by top control|
|disabled||Disables control off user access|
|top||Point top control to the group of linked controls|
|mode|tri|Three ("tri") or two ("bi") states mode|
# Appearance
Checked: value=1
Empty: value=0
Dashed: value=-1
Gray background: disabled.
