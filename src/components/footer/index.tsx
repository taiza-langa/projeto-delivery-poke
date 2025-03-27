export default function Footer() {
    return (
        <footer className="bg-[#bcb349] text-white text-center py-7">
            <p className="text-sm">© 2025 | Todos os direitos reservados à Taiza Langa.</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="#" aria-label="Instagram">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="github"/>
                </a>
                <a href="https://github.com/taiza-langa" aria-label="GitHub">
                    <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/ffffff/linkedin--v1.png" alt="linkedin--v1"/>
                </a>
                <a href="#" aria-label="LinkedIn">
                    <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png" alt="instagram-new--v1"/>
                </a>
            </div>
        </footer>
    )
}