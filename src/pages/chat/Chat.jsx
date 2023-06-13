import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <>
    <NavPainel />
      <div className="main-content-wrap sidenav-open flex-column">
        <div className="main-content">
          <div className="card chat-sidebar-container">
            <div className="border-right">
              <PerfectScrollbar>
                <div className="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar">
                  <a className="link-icon d-md-none" data-sidebar-toggle="chat">
                    <i className="icon-regular ml-0 mr-3 i-Left"></i>
                  </a>
                  <div className="form-group m-0 flex-grow-1">
                    <input
                      className="form-control form-control-rounded"
                      id="search"
                      type="text"
                      placeholder="Buscar contatos"
                    />
                  </div>
                </div>
                <div className="contacts-scrollable perfect-scrollbar">
                  <div className="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom">
                    Recentes
                  </div>
                  <div className="p-3 d-flex align-items-center border-bottom online contact">
                    <img className="avatar-sm rounded-circle mr-3" src={""} />
                    <div>
                      <h6 className="m-0">Antonio Carlos</h6>
                      <span className="text-muted text-small">3 Oct, 2022</span>
                    </div>
                  </div>
                  <div className="mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom">
                    Contatos
                  </div>
                  <div className="p-3 d-flex border-bottom align-items-center contact online">
                    <img className="avatar-sm rounded-circle mr-3" src={""} />
                    <h6>William Ferreira</h6>
                  </div>
                  <div className="p-3 d-flex border-bottom align-items-center contact online">
                    <img className="avatar-sm rounded-circle mr-3" src={""} />
                    <h6>Jaqueline Day</h6>
                  </div>
                  <div className="p-3 d-flex border-bottom align-items-center contact">
                    <img className="avatar-sm rounded-circle mr-3" src={""} />
                    <h6>Jhone Will</h6>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </div>

          <div className="chat-content-wrap">
            <div className="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar">
              <a className="link-icon d-md-none" data-sidebar-toggle="chat">
                <i className="icon-regular i-Right ml-0 mr-3"></i>
              </a>
              <div className="d-flex align-items-center">
                <img className="avatar-sm rounded-circle mr-2" src={""} />
                <p className="m-0 text-title text-16 flex-grow-1">
                  Francisco Silva
                </p>
              </div>
            </div>
            <PerfectScrollbar>
              <div
                class="chat-content perfect-scrollbar"
                data-suppress-scroll-x="true"
              >
                <div class="d-flex mb-4">
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">
                        Francisco Silva
                      </p>
                      <span class="text-small text-muted">25 min ago</span>
                    </div>
                    <p class="m-0">Teremos a consulta as 17:00 ?</p>
                  </div>
                  <img class="avatar-sm rounded-circle ml-3" src={""} />
                </div>
                <div class="d-flex mb-4 user">
                  <img class="avatar-sm rounded-circle mr-3" src={""} />
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">João</p>
                      <span class="text-small text-muted">24 min ago</span>
                    </div>
                    <p class="m-0">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="d-flex mb-4">
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">
                        Francisco Silva
                      </p>
                      <span class="text-small text-muted">25 min ago</span>
                    </div>
                    <p class="m-0">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <img class="avatar-sm rounded-circle ml-3" src={""} />
                </div>
                <div class="d-flex mb-4 user">
                  <img class="avatar-sm rounded-circle mr-3" src={""} />
                  <div class="message flex-grow-1">
                    <div class="d-flex">
                      <p class="mb-1 text-title text-16 flex-grow-1">João</p>
                      <span class="text-small text-muted">24 min ago</span>
                    </div>
                    <p class="m-0">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </PerfectScrollbar>
          </div>
          <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
            <form class="inputForm">
              <div class="form-group">
                <textarea
                  class="form-control form-control-rounded"
                  id="message"
                  placeholder="Escreva sua mensagem"
                  name="message"
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-flex">
                <div class="flex-grow-1"></div>
                <button class="btn btn-icon btn-rounded btn-primary mr-2">
                  <i class="i-Paper-Plane"></i>
                </button>
                <button
                  class="btn btn-icon btn-rounded btn-outline-primary"
                  type="button"
                >
                  <i class="i-Add-File"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
