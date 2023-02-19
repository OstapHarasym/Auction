namespace Data.Entities;

public class LotEntity
{
    public Guid Id { get; set; }

    public string Title { get; set; }
    
    public string Description { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
    
    public DateTime Start { get; set; }
    
    public DateTime End { get; set; }
    
    public List<BidEntity> Bids { get; set; }
    
    public Guid SellerId { get; set; }
    
    public UserEntity Seller { get; set; }
}
