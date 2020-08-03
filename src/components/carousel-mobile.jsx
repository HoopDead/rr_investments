import React from "react";

import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBIcon } from
    "mdbreact";


/**
 * CarouselMobile
 * Description: Made for rendering carousel on website ONLY on devices that are smaller than 992 px in width
 * TOOD: Probably update the carousel with brand new animation.
 */
const CarouselMobile = () => {
    return (
        <MDBCarousel
            activeItem={1}
            length={9}
            showControls={true}
            showIndicators={true}
            className="z-depth-1 mt-5"
            id="about-carousel">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView cascade className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="laptop-code"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Projektowanie</span></h3>
                        <p className="font-raleway-light text-justify">zaawansowanych, kompleksowych oraz responsywnych stron internetowych.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="balance-scale"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Doradztwo</span></h3>
                        <p className="font-raleway-light text-justify">z zakresu wprowadzania firm w przestrzeń wirtualna: tworzenie stron w mediach społecznościowych, internetowych kampanii promocyjnych, strategii marketingowej w przestrzeni wirtualnej.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="cogs"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Optymalizacja</span></h3>
                        <p className="font-raleway-light text-justify">stron internetowych pod kątem wyników w wyszukiwarkach internetowych - SEO.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="pen-nib"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Tworzenie</span></h3>
                        <p className="font-raleway-light text-justify">tekstów z zakresu content marketingu: tekstów promocyjnych, reklamowych oraz innych, pożądanych przez naszych klientów zawartości.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                    <MDBView className="text-center">
                        <MDBIcon size="2x" className="orange-icon" icon="tools"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Wdrażanie</span></h3>
                        <p className="font-raleway-light text-justify">witryn typu Landing Page z zachowaniem standardów W3C.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="money-bill-alt"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Zespalanie</span></h3>
                        <p className="font-raleway-light text-justify">witryn internetowych z wieloma rodzajami systemów płatności.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" fab icon="wordpress"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Obsługa</span></h3>
                        <p className="font-raleway-light text-justify">systemów zarządzania treścią - CMS oraz jego integracją z wcześniej powstałymi witrynami/</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="8">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="sync-alt"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Modernizacja</span></h3>
                        <p className="font-raleway-light text-justify">dotychczas istniejących witryn internetowych, ich dalszą obsługa oraz kompleksowym doradztwem.</p>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="9">
                    <MDBView className="text-center">
                        <MDBIcon size="4x" className="orange-icon" icon="cloud-upload-alt"></MDBIcon>
                        <h3 className="mt-4"><span className="font-raleway-bold">Implementacja</span></h3>
                        <p className="font-raleway-light text-justify">aplikacji internetowych takich jak: blogi, sklepy internetowe, platformy sprzedażowe, fora i inne.</p>
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    )
}
export default CarouselMobile; 