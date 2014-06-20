class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    
    if @card.save
      render "cards/show"
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end
  
  def destroy
    @card = Card.find(params[:id])
    
    if @card.destroy
      render "cards/show"
    end
  end
  
  def update
    @card = Card.find(params[:id])
    
    if @card.update(card_params)
      render "cards/show"
    end
  end
  
  private
  def card_params
    params.require(:card).permit(:title, :description, :rank, :list_id)
  end
end
