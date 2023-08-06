use crate::controllers::hello_world::hello;
use crate::server::websocket::websocket;

use actix_web::{web, App, HttpServer};

pub async fn http_server() -> std::io::Result<()> {
    return HttpServer::new(|| 
                           App::new().service(hello)
                            .service(web::resource("/ws").route(web::get().to(websocket)))
                           )
        .bind(("127.0.0.1", 8080))?
        .run()
        .await;
}
