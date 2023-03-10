namespace Queries.DataTransferObjects.Bid.Responses;

public class GetBidsResponse
{
    public Guid Id { get; set; }
    
    public decimal Amount { get; set; }
    
    public string BidderName { get; set; }
    
    public DateTime BidTime { get; set; }
}
