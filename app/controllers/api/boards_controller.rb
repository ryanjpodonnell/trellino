class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    
    if @board.save
      render "boards/show"
    else
      render :json => @board.errors, :status => :unprocessable_entity
    end
  end
  
  def index
    @boards = Board.all
    render "boards/index"
  end
  
  def show
    @board = Board.find(params[:id])
    @lists = @board.lists
    render "boards/show"
  end
  
  private
  def board_params
    params.require(:board).permit(:title)
  end
end
