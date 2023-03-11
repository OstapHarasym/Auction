namespace Queries.DataTransferObjects.Lot.Responses;

public class GetLotResponse
{
    public Guid Id { get; set; }

    public string Title { get; set; }
    
    public string Description { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
    
    public string SellerName { get; set; }
}
