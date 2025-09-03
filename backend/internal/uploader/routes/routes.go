package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/jobinv12/fastocr/backend/internal/uploader/handler"
)

func UploaderRoute(app *fiber.App) {

	app.Post("/v1/api/upload", handler.UploaderHandler)
}
