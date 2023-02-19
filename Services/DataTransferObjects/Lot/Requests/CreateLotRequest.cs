namespace Services.DataTransferObjects.Lot.Requests;

public class CreateLotRequest
{
    public string Title { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
    
    public string Description { get; set; }
    
    public DateTime Start { get; set; }
    
    public DateTime End { get; set; }
}
