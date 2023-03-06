Blockly.Blocks['try'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};