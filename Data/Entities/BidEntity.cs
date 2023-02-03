namespace Data.Entities;

public class BidEntity
{
    public Guid Id { get; set; }
    
    public decimal Amount { get; set; }
    
    public Guid LotId { get; set; }
    
    public LotEntity Lot { get; set; }
}
