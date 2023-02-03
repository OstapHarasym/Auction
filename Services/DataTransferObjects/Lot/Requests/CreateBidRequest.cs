namespace Services.DataTransferObjects.Lot.Requests;

public class CreateBidRequest
{
    public Guid LotId { get; set; }
    
    public decimal Amount { get; set; }
}
