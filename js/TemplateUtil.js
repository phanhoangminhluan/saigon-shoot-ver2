const TemplateUtil = {
    template: function(html, data) {
        return _.template(html)(data);
    },
    PRODUCT: `
        <div class="col2">
            <div class="service-product-detail">
                <img src="./img/<%=productImage%>">
                <div class="serivce-product-detail-hover">
                    <p>
                        <%= productName %>
                    </p>
                    <i class="fa fa-external-link" id="<%=productId%>"></i>
                </div>
            </div>
        </div>
    `,
    SERVICE: `
        <div class="col2">
            <div class="service-product-detail">
                <img src="./img/<%=serviceImage%>">
                <div class="serivce-product-detail-hover">
                    <p>
                        <%= serviceName %>
                    </p>
                    <i class="fa fa-external-link" id="<%=serviceId%>"></i>
                </div>
            </div>
        </div>
    `,
    HUMAN: `
        <div class="item">
            <div class="fab_detail" id="fab-1">
                <img src="./img/<%= humanImage %>" alt="">
                <div class="label">
                    <h5>
                        <%= humanName %>
                    </h5>
                    <span>
                        <%= humanTitle %>
                    </span>
                </div>
                <div class="fab_hover">
                    <div class="fab_hover_text">
                        <div class="fab_hover_title">
                            Kinh nghiệm
                        </div>
                        <div class="fab_hover_desc">
                            <i class="fa fa-external-link" style="height: 100px;width:100px" id="<%= humanId %>" ></i>
                        </div>
                    </div>
                    <div class="icon_social">
                        <i class="fa fa-facebook-official" data-href='<%= humanFacebook %>'></i>
                        <i class="fa fa-instagram" data-href=<%= humanInstagram %>></i>
                    </div>
    
                </div>
            </div>
        </div>
    `,
    SLIDER: `
        <div class="item">
            <img src="./img/<%=sliderImg%>" class="d-block w-100"  alt="...">
        </div> 
    `,
    ASSCOCIATE: `
        <div> <img id="" src="./img/<%=assImage%>" alt=""></div>
    `
};