class Api::ListsController < ApplicationController
  def index
    @lists = Board.find(params[:board_id]).lists
    render "lists/index"
  end
  
  def show
    @list = List.find(params[:id])
    @cards = @list.cards
    render "lists/show"
  end
  
  # private
  # def list_params
  #   params.require(:list).permit(:title, :rank, :board_id)
  # end
end
