import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    console.log(this.length)
  }
  
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    let letters = 'abcdefghijklmnopqrstuvqxyz';
    let numbers = '1234567890';
    let symbols = '!@#$%^&*()_';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
    
  }

 


}
