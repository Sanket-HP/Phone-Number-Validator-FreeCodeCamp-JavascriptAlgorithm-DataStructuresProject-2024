# Phone Number Validator
This is a simple web application that validates US phone numbers based on specified criteria.

## Features
- Validates various formats of US phone numbers.
- Alerts users when no phone number is provided before checking.
- Clears the results area upon request.
- Provides feedback on whether a provided phone number is valid or invalid.
- User Stories Implemented
- User can input a phone number in different formats (e.g., "1 555-555-5555", "1 (555) 555-5555", "5555555555").
- Application validates and displays whether the phone number is valid or invalid.
- User is alerted if no phone number is provided before attempting to validate.
- Results area can be cleared to start fresh.

## Technologies Used
- HTML
- CSS
- JavaScript

##How to Use
1. Clone the repository:
git clone https://github.com/your-username/phone-number-validator.git

2. Navigate into the project directory.

3. Open index.html in a web browser.

4. Enter a phone number in the input field.

5. Click on the "Check" button to validate the phone number.

6. Click on the "Clear" button to reset the results area.

## Example Valid Phone Numbers
"1 555-555-5555"
"1 (555) 555-5555"
"5555555555"
"555-555-5555"
"(555)555-5555"
"1(555)555-5555"
"1 555 555 5555"
"1 456 789 4444"

## Example Invalid Phone Numbers
"555-5555"
"5555555"
"1 555)555-5555"
"2 (757) 622-7382"
"0 (757) 622-7382"
"-1 (757) 622-7382"
"2 757 622-7382"
"10 (757) 622-7382"
"27576227382"
"(275)76227382"
"2(757)6227382"
"2(757)622-7382"
"555)-555-5555"
"(555-555-5555"
"(555)5(55?)-5555"
"55 55-55-555-5"
"11 555-555-5555"

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Inspired by the FCC Telephone Number Validator project.
