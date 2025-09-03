package handler

import (
	"io"

	"github.com/gofiber/fiber/v2"
	"github.com/otiai10/gosseract/v2"
)

func UploaderHandler(c *fiber.Ctx) error {

	// get lang-code
	langCode := c.FormValue("lang-code")
	if langCode == "" {
		langCodeErr(c)
	}

	// get file
	file, err := c.FormFile("file")
	if err != nil {
		uploadImageErr(c, err)
	}

	// open file
	src, err := file.Open()
	if err != nil {
		fileErr(c, err)
	}

	defer src.Close()

	// Read Bytes
	fileBytes, err := io.ReadAll(src)
	if err != nil {
		bytesErr(c, err)
	}

	// ocr
	ocrClient := gosseract.NewClient()
	defer ocrClient.Close()

	ocrClient.SetLanguage(langCode)

	if err := ocrClient.SetImageFromBytes(fileBytes); err != nil {
		ocrErr(c, err)
	}

	data, err := ocrClient.Text()
	if err != nil {
		ocrErr(c, err)
	}

	return c.JSON(fiber.Map{
		"status": 200,
		"data":   data,
	})

}

func langCodeErr(c *fiber.Ctx) error {

	return c.JSON(fiber.Map{
		"status":  400,
		"message": "Select Language",
	})
}

func uploadImageErr(c *fiber.Ctx, err error) error {

	return c.JSON(fiber.Map{
		"status":  400,
		"message": "Upload Image",
	})
}

func ocrErr(c *fiber.Ctx, err error) error {
	return c.JSON(fiber.Map{
		"status":  422,
		"message": "No text found in image. Please upload image with text",
	})
}

func fileErr(c *fiber.Ctx, err error) error {
	return c.JSON(fiber.Map{
		"status":  500,
		"message": "Unable to process file",
	})
}

func bytesErr(c *fiber.Ctx, err error) error {
	return c.JSON(fiber.Map{
		"status":  500,
		"message": "Failed to process file",
	})
}
