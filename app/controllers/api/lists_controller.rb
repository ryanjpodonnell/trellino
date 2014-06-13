class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    
    if @list.save
      render "lists/show"
    else
      render :json => @list.errors, :status => :unprocessable_entity
    end
  end
  
  def index
    @lists = Board.find(params[:board_id]).lists
    render "lists/index"
  end
  
  def show
    @list = List.find(params[:id])
    @cards = @list.cards
    render "lists/show"
  end
  
  private
  def list_params
    params.require(:list).permit(:title, :rank, :board_id)
  end
end
