using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

[ApiController]
[Route("api/contact")]
public class ContactController : ControllerBase
{

    [HttpGet]
    public IActionResult Test()
    {
        return Ok("Contact controller works");
    }

    [HttpPost]
    public async Task<IActionResult> Send(ContactDto dto)
    {
        var emailAddress = Environment.GetEnvironmentVariable("EMAIL_ADDRESS");
        var emailPassword = Environment.GetEnvironmentVariable("EMAIL_PASSWORD");
        
        if(string.IsNullOrEmpty(emailAddress) || 
            string.IsNullOrEmpty(emailPassword))
        {
            return StatusCode(500, "Email configuration missing");
        }
        
        var email = new MimeMessage();
        
        email.From.Add(MailboxAddress.Parse(emailAddress));
        email.To.Add(MailboxAddress.Parse(emailAddress));
        email.Subject = dto.Subject;

        email.Body = new TextPart("plain")
        {
            Text =
            $"Name: {dto.Name}\n" +
            $"Email: {dto.Email}\n\n" +
            dto.Message
        };

        try
        {
            using var smtp = new SmtpClient();

            await smtp.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(emailAddress, emailPassword);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);

            return Ok(new {message = "Email sent"});
        } 
    catch (Exception ex)
    {
        return StatusCode(500, ex.Message);
    }
    }
}