namespace Data.Entities;

public class BidEntity
{
    public Guid Id { get; set; }
    
    public decimal Amount { get; set; }
    
    public DateTime BidTime { get; set; }
    
    public Guid LotId { get; set; }
    
    public LotEntity Lot { get; set; }
    
    public Guid BidderId { get; set; }
    
    public UserEntity Bidder { get; set; }
}
