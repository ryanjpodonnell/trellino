class ListsController < ApplicationController
  def show
    @list = List.find(params[:id])
    @cards = @list.cards
    render "lists/show"
  end
end
