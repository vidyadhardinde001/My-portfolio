import cv2
import pytesseract
import numpy as np

# Set Tesseract path if not in system PATH
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

def preprocess_image(image_path):
    """Preprocess the image to improve OCR accuracy."""
    img = cv2.imread(image_path)

    if img is None:
        raise FileNotFoundError(f"Error: Cannot read image '{image_path}'.")

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply adaptive thresholding
    gray = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)

    # Remove noise using morphological transformations
    kernel = np.ones((1, 1), np.uint8)
    gray = cv2.morphologyEx(gray, cv2.MORPH_CLOSE, kernel)

    # Resize for better recognition
    gray = cv2.resize(gray, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

    return gray

def extract_text(image_path):
    """Extracts text from a preprocessed food package image."""
    preprocessed_img = preprocess_image(image_path)

    # Save preprocessed image for debugging
    cv2.imwrite("processed_image.png", preprocessed_img)

    # Extract text with proper OCR settings
    text = pytesseract.image_to_string(preprocessed_img, lang="eng", config="--psm 6")
    return text.strip()

# Test with your image
image_path = r"C:\Users\vidyadhar\Desktop\text.png"
extracted_text = extract_text(image_path)

print("Extracted Text:\n", extracted_text)
