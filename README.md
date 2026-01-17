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
      top="tcb">
  </tristate-checkbox>
  <br/>
<fieldset style="display:inline-block;">
<legend>Choose your best of three</legend>
  <tristate-checkbox
      id="cb2"
      name="cb2"
      value="-1"
      class="tcb"
      label="on">
  </tristate-checkbox>
<br/>
<tristate-checkbox
      id="cb3"
      name="cb3"
      class="tcb"
      label="on"
      disabled
      >
  </tristate-checkbox>
  </fieldset>
  <br/>
  <tristate-checkbox
      id="cb12"
      name="cb12"
      top="tcb2">
  </tristate-checkbox>
  <br/>
<fieldset style="display:inline-block;">
<legend>Choose your best of two</legend>
  <tristate-checkbox
      id="cb22"
      name="cb22"
      class="tcb2"
      mode="bi"
      value="1"
      disabled>
  </tristate-checkbox>
<br/>
<tristate-checkbox
      id="cb32"
      name="cb32"
      class="tcb2"
      label="on"
      mode="bi"
      value="1">
  </tristate-checkbox>
  </fieldset>
<p></p>
<tristate-checkbox
      id="cb4"
      name="cb4"
      value="1"
      mode="bi">
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
|value |0  |1 - On; 0 - Off; -1 - Undefined  |
|label|Off |Off - no label; On - 1 - "on"; 0 - "off"; -1 - "all"|
|class||Class for stanard access and manage by top control|
|disabled||Disables control off user access|
|top||Point top control to the group of linked controls|
|mode|tri|Three ("tri") or two ("bi") states mode|
# Appearance
Checked: value=1, label "on"\
Empty: value=0, label "off"\
Dashed: value=-1, label "all"\
Gray background: disabled.
