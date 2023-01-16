namespace Services.DataTransferObjects.Lot.Requests;

public class CreateLotRequest
{
    public string Title { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
}
