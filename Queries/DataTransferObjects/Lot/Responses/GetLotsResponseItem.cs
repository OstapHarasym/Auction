namespace Queries.DataTransferObjects.Lot.Responses;

public class GetLotsResponseItem
{
    public Guid Id { get; set; }

    public string Title { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
}
