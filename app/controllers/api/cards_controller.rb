class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    
    if @card.save
      render "cards/show"
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  private
  def card_params
    params.require(:card).permit(:title, :rank, :list_id)
  end
end
