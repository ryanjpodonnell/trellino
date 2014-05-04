class Api::ListsController < ApplicationController
  def show
    debugger
    @list = List.find(params[:id])
    @cards = @list.cards
    render "lists/show"
  end
end
