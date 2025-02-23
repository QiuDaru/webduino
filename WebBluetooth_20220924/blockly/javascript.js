Blockly.JavaScript['webbluetooth_uuid'] = function(block) { 
  var service = Blockly.JavaScript.valueToCode(block, 'service', Blockly.JavaScript.ORDER_ATOMIC);
  var tx = Blockly.JavaScript.valueToCode(block, 'tx', Blockly.JavaScript.ORDER_ATOMIC);
  var rx = Blockly.JavaScript.valueToCode(block, 'rx', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webbluetooth_uuid('+service+',' + tx + ',' + rx + ');\n';
  return code;
};

Blockly.JavaScript['webbluetooth_button'] = function(block) {
  var value_id = block.getFieldValue('id_');  
  var value_show = block.getFieldValue('show_');
  var code = 'webbluetooth_button("'+value_id+'","'+value_show+'");\n';
  return code;
};

Blockly.JavaScript['webbluetooth_button_position'] = function(block) { 
  var value_id = block.getFieldValue('id_');   
  var value_left_ = Blockly.JavaScript.valueToCode(block, 'left_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_top_ = Blockly.JavaScript.valueToCode(block, 'top_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webbluetooth_button_position("'+value_id+'",' + value_left_ + ',' + value_top_ + ');\n';
  return code;
};

Blockly.JavaScript['webbluetooth_button_onclick'] = function(block) {
  var value_button = block.getFieldValue('button_');   
  var value_id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webbluetooth_button_onclick("'+value_button+'",'+value_id+');\n';
  return code;
};

Blockly.JavaScript['webbluetooth_sendtext'] = function(block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd_', Blockly.JavaScript.ORDER_ATOMIC); 
  var value_end = block.getFieldValue('end_');
  var code = 'webbluetooth_sendText('+value_cmd+');\n';
  return code;
};

Blockly.JavaScript['webbluetooth_get'] = function(block) {
  var code = 'webbluetooth_get()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webbluetooth_getstate'] = function(block) {
  var code = 'webbluetooth_getState()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webbluetooth_getid'] = function(block) {
  var code = "'"+block.getFieldValue('id_')+"'";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['webbluetooth_wait'] = function(block) {
  var value_baudrate = block.getFieldValue('baudrate_');
  var code = 'while (!webbluetooth_getState()) {\n  await delay(1, true);\n}\n';
  return code;
};

Blockly.JavaScript['webbluetooth_getdata'] = function(block) { 
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do_');
  var code = 'webbluetooth_getdata = async function() {\n' + statements_do + '\n};\n';
  return code;
};