# Text Decoder

## Overview
This project is a simple text encryption and decryption application developed as part of the Logic Programming Challenge from the Alura and Oracle Next Education program. The goal was to build a functional text encoder/decoder from scratch using only the provided encryption key and a Figma design suggestion.

## Features
- **Text Encryption:** Converts input text into an encrypted format using a predefined substitution cipher.
- **Text Decryption:** Reverts the encrypted text back to its original form.
- **Copy to Clipboard:** Allows users to easily copy the processed text.
- **Dynamic UI Handling:** Displays different states based on user interaction.

## Technologies Used
- **JavaScript**: Core functionality for encryption, decryption, and UI interactions.
- **HTML**: Structuring the web interface.
- **CSS**: Styling the application.

## How It Works
### Encryption Logic
The encryption function substitutes vowels with predefined strings:
- `a` → `ai`
- `e` → `enter`
- `i` → `imes`
- `o` → `ober`
- `u` → `ufat`

Example:
```
Input: "hello world"
Encrypted: "henterllober woberrloberd"
```

### Decryption Logic
The decryption function reverses the substitutions:
```
Encrypted: "henterllober woberrloberd"
Decrypted: "hello world"
```

### UI Functionality
- The encryption and decryption buttons trigger their respective functions.
- The copy button selects and copies the processed text to the clipboard.
- The display dynamically updates to show the output only when there is content.

## Installation and Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/text-decoder.git
   ```
2. Open `index.html` in a web browser.
3. Enter text and use the encryption/decryption features.

## Future Improvements
- Add support for additional encryption methods.
- Implement a more secure encryption algorithm.
- Enhance the UI with animations and better responsiveness.

## License
This project is open-source and available under the MIT License.

