class FormValidator {
	constructor({
		  input,
		  submit,
		  inactiveButton,
		  errorMsg, 
		  invalidInput
	}, formElem)
	{
		this._input = input;
		this._submit = submit;
		this._nactiveButton = inactiveButton;
		this._errorMsg = errorMsg;
		this._invalidInput = invalidInput;
		this._form = formElem;
	}

	enableValidation() {
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._toggleButtonState();
			this._inactiveButtonInPopup(); // default button not active
		});

		this._form.addEventListener('reset', () => {
			this._inputList.forEach((inputElem) => {
				this._hideInputError(inputElem);
			})
		});

    this._setEventListeners();
	};
	
	// listen elements forms
	_setEventListeners() {
	  this._inputList = Array.from(this._form.querySelectorAll(this._input));
		this.button = this._form.querySelector(this._submit);
		this._toggleButtonState();
	  this._inputList.forEach((input) => {
			input.addEventListener('input', () => {
		  	this._toggleInputState(input);
		  	this._toggleButtonState();
			});
	  });
	};
	
	// if input not valid return error
	_hasInvalidInput() {
	  return this._inputList.some((input) => {
			return !input.validity.valid;
	  })
	};
	
	// toggle status input
	_toggleInputState(input) { // бывшая isValid
		if (!input.validity.valid) {
			this._showInputError(input);
		} else {
			this._hideInputError(input);
		}
	}
	
	// show error
	_showInputError(input) {
		const errorElem = this._form.querySelector(`#${input.id}-error`);
		input.classList.add(this._invalidInput);
		errorElem.textContent = input.validationMessage;
		errorElem.classList.add(this._errorMsg);
	};
	
	// delete error
	_hideInputError(input) {
		const errorElem = this._form.querySelector(`#${input.id}-error`);

		input.classList.remove(this._invalidInput);
		errorElem.classList.remove(this._errorMsg);
		errorElem.textContent = '';
	};

	// status button
	_toggleButtonState() {
		if (this._hasInvalidInput(this._inputList)) {
			this.button.classList.add(this._nactiveButton);
			this._inactiveButtonInPopup();
		} else {
			this.button.classList.remove(this._nactiveButton);
			this._activeButtonInPopup(); 
		}
	}
	
	// no click
	_inactiveButtonInPopup() {
		this.button.setAttribute('disabled', true);
	}

	// click
	_activeButtonInPopup() {
		this.button.removeAttribute('disabled');
	}
};

export default FormValidator;