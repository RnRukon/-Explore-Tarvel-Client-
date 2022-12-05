import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import uploadImage from '../../../Hooks/useImgBbImgUpload';
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Grid, Rating, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const UpdateTravelsFrom = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = React.useState(Number);
    const [hover, setHover] = React.useState(-1);
    const classes = useStyles();
    const [imgs, setImgs] = React.useState('');
    const [beforeImg, setBeforeImg] = useState('');
    const [rating, setRating] = useState(Number);

    console.log("1", rating, "2", value);

    useEffect(() => {
        fetch(`https://explore-tarvel-server.onrender.com/travel/${id}`)
            .then(res => res.json())
            .then(data => {
                setBeforeImg(data?.img);
                setRating(data.rating)
                reset(data);
            })
    }, [id, reset])








    let history = useHistory();


    const update = (data) => {
        data.rating = value ? value : rating;
        data.img = imgs ? imgs : beforeImg
        data.role = true;


        axios.put(`https://explore-tarvel-server.onrender.com/UpdateTravelsFrom/${id}`, data)
            .then(res => {
                if (res?.data?.modifiedCount) {
                    alert('Update SuccessFully')
                    history.push("/dashboard/UpdateTravels");
                }
            })

        reset();
    }

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setImgs(res.data.data.url);
            })
    }


    return (
        <div className=' h-screen update-form-bg'>
            <h1 className='  text-slate-100 fw-bold text-lg underline-offset-8  text-center fw-bold underline uppercase py-11'>Update Products</h1>


            <div className='container-fluid col-lg-6 bg-white card card-body p-5 shadow-2xl '>


                {<form
                    onSubmit={handleSubmit(update)}
                    noValidate
                >
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                size="small"

                                fullWidth
                                label="Title"
                                focused
                                {...register("title", { required: true })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                label="Description"
                                focused
                                {...register("description", { required: true })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                label="Address"
                                focused
                                {...register("address", { required: true })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                label="Info"
                                focused
                                {...register("info", { required: true })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                label="Category"
                                focused
                                {...register("category", { required: true })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="number"
                                size="small"
                                variant="outlined"
                                fullWidth
                                label="Cost"
                                focused
                                {...register("price", { required: true })}
                            />
                        </Grid>



                        <Grid item xs={12} sm={6}>
                            <br />
                            <Stack direction="row" alignItems="center" spacing={2}>

                                <IconButton color="primary" aria-label="upload picture" component="label" width='full'>
                                    <input hidden accept="image/png, image/jpg, image/jpeg" type="file"
                                        onChange={(e) => handleImgUpload(e.target.files[0])}
                                    />

                                    <div className=' w-60'>

                                        <img className=' w-screen ' src={imgs ? imgs : beforeImg} alt="" />
                                        <p style={{ position: 'absolute', top: "50%", left: '50%', bottom: '50%', color: 'white' }}><PhotoCamera /> </p>
                                    </div>
                                </IconButton>
                            </Stack>

                        </Grid>


                        <Grid item xs={12} sm={6}>


                            <div className={classes.root}>
                                <Rating
                                    name="hover-feedback"
                                    value={value ? value : rating}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {value !== null && (
                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value?.toString()]}</Box>
                                )}
                            </div>

                        </Grid>


                    </Grid>
                    {<Grid
                        container
                        spacing={1}
                        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                    >
                        <Grid item xs={12} sm={6} md={6}>
                            <Button

                                type="submit"
                                size="small"
                                variant="outlined"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>}
                </form>}
            </div>

        </div>
    );
};

export default UpdateTravelsFrom;