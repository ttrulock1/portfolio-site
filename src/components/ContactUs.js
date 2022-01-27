import React from 'react';
const ContactUs = props => {
    let resumeData = props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me below
              </p>
                   <form>
                        <div class="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="text" class="form-control" id="exampleInputName" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputMsg">Message</label>
                            <input type="text" class="form-control" id="exampleInputMsg" placeholder="Message" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
export default ContactUs
