import React, {useState} from 'react';
import "./Search.css";
import {ButtonGroup, ToggleButton, InputGroup, FormControl, Button,
            Form,Row
            } from 'react-bootstrap'





            function Search(){
              const [radioValue, setRadioValue] = useState('Book'); 
              const [radiValue, setRadiValue] = useState('Basic'); 
              const radios = [
                  { name: 'General', value: 'General' },
                  { name: 'Book', value: 'Book' },
                  { name: 'Forum', value: 'Forum' },
                  { name: 'Members', value: 'Members' },
                ];
                const radios1 = [
                  { name: 'Basic', value: 'Basic' },
                  { name: 'Advanced', value: 'Advanced' },
                  { name: 'BCID', value: 'BCID' },
                  { name: 'Wishlist', value: 'Wishlist' },
                ];
                function Subformbutton() {
                  if (radiValue==='Basic'|| radiValue==='Wishlist'){
                    return(
                      <div className='div2'>
                      <InputGroup>
                        <p className='heading5'>Title</p>
                        <FormControl aria-label="Text input with checkbox"className='text6'id='titl'/>
                        <InputGroup.Append className='input1'>
                          <InputGroup.Text><input type="Checkbox" aria-label="Checkbox for following text input" className='chckbx'id='Exactonly'/>
                            Exact Match Only</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading4'>Author</p>
                        <FormControl aria-label="Text input with checkbox" className='text6'id='aauth'/>
                        <InputGroup.Append className='input1'>
                          <InputGroup.Text><input type="Checkbox" aria-label="Checkbox for following text input" className='chckbx'id='Matchonly'/>
                            Exact Match Only</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading4">Sort By</p>
                      <InputGroup.Prepend>
                      <Form.Control
                        as="select"
                        className="select1"
                        id="MembSortby"
                        custom
                      >
                        <option value="Reg">Registration Date</option>
                        <option value="Title" selected="selected">Title</option>
                        <option value="Auth">Author</option>
                        <option value="Categ">Category</option>
                        <option value="Loc">Location</option>
                      </Form.Control>
                      <Form.Control
                        as="select"
                        className="select0"
                        id="MembSorting"
                        custom
                      >
                        <option value="Asc">Ascending</option>
                        <option value="Desc" selected="selected">Descending</option>
                      </Form.Control>
                      </InputGroup.Prepend>
                      </InputGroup>
                      <Button variant="primary" className="srch">Search</Button>
                    </div>
                  );
                  }
                  else if (radiValue==='Advanced'){
                    return(
                      <div className='div2'>
                      <InputGroup>
                        <p className='heading5'>Title</p>
                        <FormControl aria-label="Text input with checkbox" className='text6'id='Tit'/>
                        <InputGroup.Append className='input1'>
                          <InputGroup.Text><input type="Checkbox" aria-label="Checkbox for following text input" className='chckbx'id='Exact'/>
                            Exact Match Only</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading4'>Author</p>
                        <FormControl aria-label="Text input with checkbox" className='text6' id='Auth'/>
                        <InputGroup.Append className='input1'>
                          <InputGroup.Text><input type="Checkbox" aria-label="Checkbox for following text input" className='chckbx'id='Match'/>
                            Exact Match Only</InputGroup.Text>
                        </InputGroup.Append>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading4">Status</p>
                      <Form.Control
                        as="select"
                        className="select2"
                        id="Status"
                        custom
                      >
                        <option value="All">all</option>
                        <option value="Read">to be read</option>
                        <option value="Avail">available</option>
                        <option value="Perman">permanent collection</option>
                        <option value="Reser">reserved</option>
                      </Form.Control>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading8">Category</p>
                      <Form.Control
                        as="select"
                        className="select2"
                        id="Category"
                        custom
                      >
                        <option value="Arts">Arts</option>
                        <option value="Biography">Biography</option>
                        <option value="Com">Computer & Internet</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Home">Home & Gardens</option>
                        <option value="Others">Others</option>
                      </Form.Control>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading6'>ISBN</p>
                        <FormControl aria-label="Text input with checkbox" className='text3'id='isbn'/>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading7'>Member Name</p>
                        <FormControl aria-label="Text input with checkbox" className='text3' id='Memnam'/>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading4">Sort By</p>
                      <InputGroup.Prepend>
                      <Form.Control
                        as="select"
                        className="select1"
                        id="MemSortby"
                        custom
                      >
                        <option value="Reg">Registration Date</option>
                        <option value="Title" selected="selected">Title</option>
                        <option value="Auth">Author</option>
                        <option value="Categ">Category</option>
                        <option value="Loc">Location</option>
                      </Form.Control>
                      <Form.Control
                        as="select"
                        className="select0"
                        id="MemSorting"
                        custom
                      >
                        <option value="Asc">Ascending</option>
                        <option value="Desc" selected="selected">Descending</option>
                      </Form.Control>
                      </InputGroup.Prepend>
                      </InputGroup>
                      <Button variant="primary" className="srch">Search</Button>
                    
                    </div>
                    );
                  }
                  else if (radiValue==='BCID'){
                    return(
                      <div className='div2'>
                      <InputGroup>
                        <p className='heading10'>BCID</p>
                        <FormControl aria-label="Text input with checkbox" className="text1" id='bcid'/>
                      </InputGroup>
                      <Form.Group as={Row}>
                      <Form.Label as="legend" column sm={2}>
                      </Form.Label>
                      <Row sm={10}>
                        <Form.Check
                          type="radio"
                          label="View Journal"
                          name="formVerticalRadios"
                          id="Vjoural"
                          className="radio1"
                        />
                        <Form.Check
                          type="radio"
                          label="New Journal Entry"
                          name="formVerticalRadios"
                          id="Njournal"
                          className="radio1"
                          checked
                        />
                        <Form.Check
                          type="radio"
                          label="Release Book"
                          name="formVerticalRadios"
                          id="Release"
                          className="radio1"
                        />
                      </Row>
                    </Form.Group>
                      
                      <Button variant="primary" className="srch1">Search</Button>
                    
                    </div>
                    );
                  }
                  else {
                    return(null);
                  }
                }
                function Formbutton(){
                  
                  if (radioValue==='General'){
                    return(
                      <div className='div0'>
                    <Form value={radiValue}>
                    <InputGroup>
                    <FormControl
                      placeholder="Place your Search here!!!"
                      aria-label="Search area"
                      aria-describedby="basic-addon2"
                      className='text0'
                      id='Search'
                    />
                    <InputGroup.Append>
                      <Button variant="primary" className='btn0'>Search</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form className="check">
                  <Form.Check label="Search Books & Titles" type='checkbox' id="Srchbook" className='form1'/>
                  <Form.Check label="Search Member Names" type='checkbox' id="Srchmem" className='form2'/>
                  <Form.Check label="Search Authors & Writers" type='checkbox' id="Srchauth" className='form3'/>
                  </Form>
                  <Form className="check">
                  <Form.Check label="Search Journal Entries (may slow search)" type='checkbox' id="Srchjourn" className='form4'/>
                  <Form.Check label="Search Forums (may slow search)" type='checkbox' id="Srchforum" className='form5'/>
                  <Form.Check label="Filter" type='Text' placeholder="Filter by screen name" size="40" id="Filter"  className="text"/>
                  </Form>
                  </Form>
                  </div>
                    );
                  }
                  else if (radioValue==='Book'){
                    return(
                      <div className='div1'>
                      <h3 className="heading1">Book Search</h3>
                      <ButtonGroup toggle className="btngrp1">
                      {radios1.map((radi, idx1) => (
                    <ToggleButton size="sm"
                      key={idx1}
                      type="radio"
                      variant="outline-secondary"
                      name="radi"
                      className="tglebtn"
                      value={radi.value}
                      checked={radiValue === radi.value}
                      onChange={(e) => setRadiValue(e.currentTarget.value)}
                    >
                      {radi.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
                <br></br> 
                <Subformbutton />
                </div>
          
                    );
                  }
                  else if (radioValue==='Forum'){
                    return(
                      <div className='div4'>
                      <InputGroup>
                        <p className='heading11'>Search Terms</p>
                        <FormControl aria-label="Text input with checkbox" className='text5' id='Srchterm'/>
                      </InputGroup>
                      <Form.Group as={Row}>
                      <p className='heading12'>Search In</p>
                      <Form.Label as="legend" column sm={2}>
                      </Form.Label>
                      <Row sm={10}>
                        <Form.Check
                          type="checkbox"
                          label="Subject"
                          id="Subchck"
                          className="checkbx1"
                          checked
                        />
                        <Form.Check
                          type="checkbox"
                          label="Message Body"
                          id="Msgchck"
                          className="checkbx1"
                          checked
                        />
                      </Row>
                    </Form.Group>
                    <InputGroup>
                        <p className='heading7'>Member Name</p>
                        <FormControl aria-label="Text input with checkbox" className='text4' id='Membname'/>
                    </InputGroup>
                      <InputGroup>
                      <p className="heading13">Forum</p>
                      <Form.Control
                        as="select"
                        className="select4"
                        id="ForumCateg"
                        custom
                      >
                        <option value="Forums">All Forums</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                      </Form.Control>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading14">Sort By</p>
                      <InputGroup.Prepend>
                      <Form.Control
                        as="select"
                        className="select5"
                        id="ForumSortby"
                        custom
                      >
                        <option value="Reg">Registration Date</option>
                        <option value="Title" selected="selected">Title</option>
                        <option value="Auth">Author</option>
                        <option value="Categ">Category</option>
                        <option value="Loc">Location</option>
                      </Form.Control>
                      <Form.Control
                        as="select"
                        className="select6"
                        id="ForumSorting"
                        custom
                      >
                        <option value="Asc">Ascending</option>
                        <option value="Desc" selected="selected">Descending</option>
                      </Form.Control>
                      </InputGroup.Prepend>
                      </InputGroup>
                      <Button variant="primary" className="srch2">Search</Button>
                    
                    </div>
                    );
                  }
                  else {
                    return (
                    <div className='div5'>
                      <InputGroup>
                        <p className='heading20'>Member Name</p>
                        <FormControl aria-label="Text input with checkbox" className='text7' id='Memname'/>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading15'>City</p>
                        <FormControl aria-label="Text input with checkbox" className='text7' id='City'/>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading16'>State/Province</p>
                        <FormControl aria-label="Text input with checkbox" className='text7' id='State'/>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading17">Country</p>
                      <Form.Control
                        as="select"
                        className="select7"
                        id="Country"
                        custom
                      >
                        <option value="Country">Country...</option>
                        <option value="Egy">Egypt</option>
                        <option value="Jor">Jordan</option>
                        <option value="Leban">Lebanon</option>
                        <option value="Syria">Syria</option>
                      </Form.Control>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading18'>Postal Code</p>
                        <FormControl aria-label="Text input with checkbox" className='text7' id='Postal'/>
                      </InputGroup>
                      <InputGroup>
                        <p className='heading19'>Referred By</p>
                        <FormControl aria-label="Text input with checkbox" className='text7' id='Reffered'/>
                      </InputGroup>
                      <InputGroup>
                      <p className="heading14">Sort By</p>
                      <InputGroup.Prepend>
                      <Form.Control
                        as="select"
                        className="select5"
                        id="MemberSortby"
                        custom
                      >
                        <option value="Age">Age</option>
                        <option value="Regist">Books Registered</option>
                        <option value="Joined">Date Joined</option>
                        <option value="Loc">Location</option>
                        <option value="Name" selected>Name</option>
                        <option value="Pic">Pictures</option>
                      </Form.Control>
                      <Form.Control
                        as="select"
                        className="select6"
                        id="MemberSorting"
                        custom
                      >
                        <option value="Asc">Ascending(A-Z)</option>
                        <option value="Desc" selected="selected">Descending(Z-A)</option>
                      </Form.Control>
                      </InputGroup.Prepend>
                      </InputGroup>
                      <Button variant="primary" className="srch2">Search</Button>
                    </div>
                    );
                  
                  }
          
                }
                
              return (
                  <div className="div">
                      <h1 className="heading">Search</h1>
                      <ButtonGroup toggle className="btngrp">
                  {radios.map((radio, idx) => (
                    <ToggleButton size="sm"
                      key={idx}
                      type="radio"
                      variant="outline-secondary"
                      name="radio"
                      className="tglebtn"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                  
                </ButtonGroup>
                <br></br> 
                  <Formbutton />
          
                  </div>
              );
          
          }
export default Search