      <button onclick="openDialog('dialog1', this)">
  Add Delivery Address
</button>
<div role="dialog"
     id="dialog1"
     aria-labelledby="dialog1_label"
     aria-modal="true"
     class="hidden">
  <h2 id="dialog1_label" class="dialog_label">
    Add Delivery Address
  </h2>
  <div class="dialog_form">
    <div class="dialog_form_item">
      <label>
        <span class="label_text">
          Street:
        </span>
        <input type="text" class="wide_input"></input>
      </label>
    </div>
    <div class="dialog_form_item">
      <label>
        <span class="label_text">
          City:
        </span>
        <input type="text" class="city_input"></input>
      </label>
    </div>
    <div class="dialog_form_item">
      <label>
        <span class="label_text">
          State:
        </span>
        <input type="text" class="state_input"></input>
      </label>
    </div>
    <div class="dialog_form_item">
      <label>
        <span class="label_text">
          Zip:
        </span>
        <input type="text" class="zip_input"></input>
      </label>
    </div>
    <div class="dialog_form_item">
      <label for="special_instructions">
        <span class="label_text">
          Special instructions:
        </span>
      </label>
      <input id="special_instructions"
             type="text"
             aria-describedby="special_instructions_desc"
             class="wide_input"></input>
      <div class="label_info" id="special_instructions_desc">
        For example, gate code or other information to help the driver find you
      </div>
    </div>
  </div>
  <div class="dialog_form_actions">
    <button onclick="openDialog('dialog2', this, 'dialog2_para1')">
      Verify Address
    </button>
    <button onclick="replaceDialog('dialog3', undefined, 'dialog3_close_btn')">
      Add
    </button>
    <button onclick="closeDialog(this)">
      Cancel
    </button>
  </div>
</div>
