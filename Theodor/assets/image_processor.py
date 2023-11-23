from PIL import Image


def process_image(input_path, output_dir, output_filename, size):
    try:
        # Open the input image
        input_image = Image.open(input_path)

        # Ensure the image is square and centered on the middle
        width, height = input_image.size
        if width != height:
            min_side = min(width, height)
            left = (width - min_side) / 2
            top = (height - min_side) / 2
            right = (width + min_side) / 2
            bottom = (height + min_side) / 2
            input_image = input_image.crop((int(left), int(top), int(right), int(bottom)))

        # Resize the image to 600x600 pixels
        input_image = input_image.resize((size, size))

        # Create the output path
        output_path = f"{output_dir}/{output_filename}.png"

        # Save the processed image
        input_image.save(output_path)
        print(f"Image saved to {output_path}")

    except Exception as e:
        print(f"Error: {str(e)}")


input_image_path = "img.png"  # Replace with your input image path
output_directory = "processed"
output_filename = "processed_image"
output_size = 1000

process_image(input_image_path, output_directory, output_filename, output_size)
