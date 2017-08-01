class HomeController < ApplicationController
	def index
		@primary_color = 'blue'
	end
	def data
		render json: {"key" => "value"}
	end
end
