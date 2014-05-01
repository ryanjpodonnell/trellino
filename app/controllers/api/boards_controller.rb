class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
    render "boards/index"
  end
  
  def show
    @board = Board.find(params[:id])
    @lists = @board.lists
    render "boards/show"
  end
end
