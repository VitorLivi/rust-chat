mod controllers;
mod server;

use server::http::http_server;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let _ = http_server().await;
    Ok(())
}
