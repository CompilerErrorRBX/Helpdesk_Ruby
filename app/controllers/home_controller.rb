class HomeController < ApplicationController
	def index
		@primary_color = 'blue'
		render text: 'Hello World!'
	end
	def data
		render json: {"key" => "value"}
	end
end
