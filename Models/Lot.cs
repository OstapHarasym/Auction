namespace Models;

public class Lot
{
    public Guid Id { get; set; }

    public string Title { get; set; }

    public decimal StartingPrice { get; set; }

    public decimal BidIncrement { get; set; }
}
