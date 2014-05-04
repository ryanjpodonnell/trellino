json.(
  card, 
  :id,
  :title,
  :description,
  :rank,
  :list_id,
  :created_at, 
  :updated_at
)

cards ||= nil
unless cards.nil?
  json.cards(cards) do |card|
    json.partial!("cards/card", :card => card)
  end
end