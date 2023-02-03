namespace Data.Entities;

public class LotEntity
{
    public Guid Id { get; set; }

    public string Title { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
    
    public List<BidEntity> Bids { get; set; }
}
